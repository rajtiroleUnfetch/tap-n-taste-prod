import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import uploadImage from './imageupload.png'; // Make sure to adjust this path

const ProductAdd: React.FC = () => {
  const [formData, setFormData] = useState({
    dishName: "",
    description: "",
    price: "",
    dishType: "Starter",
    dietaryType: "Veg",
    mainImage: null as File | null,
    additionalImages: [] as File[],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create an image element to load the file
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          img.src = event.target.result as string;
        }
      };

      reader.readAsDataURL(file);

      img.onload = () => {
        // Create a canvas element to resize the image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          const maxWidth = 200; // Max width for the image
          const maxHeight = 200; // Max height for the image
          let width = img.width;
          let height = img.height;

          // Resize the image while maintaining the aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Convert the canvas to a resized file
          canvas.toBlob((blob) => {
            if (blob) {
              const resizedFile = new File([blob], file.name, { type: file.type });
              setFormData({ ...formData, mainImage: resizedFile });
            }
          });
        }
      };
    }
  };

  const handleAdditionalImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, additionalImages: files });
  };

  const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, dishType: e.target.value });
  };

  const handleDietaryChange = (type: "Veg" | "Non-Veg") => {
    setFormData({ ...formData, dietaryType: type });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("dishName", formData.dishName);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("dishType", formData.dishType);
    data.append("dietaryType", formData.dietaryType);
    if (formData.mainImage) data.append("mainImage", formData.mainImage);
    formData.additionalImages.forEach((image) => data.append("additionalImages", image));

    try {
      await axios.post("/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Dish added successfully!");
    } catch (error) {
      toast.error("Failed to add dish.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Add Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Upload Main Image */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="mainImage"
            className="flex flex-col items-center justify-center w-32 h-32 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${uploadImage})`,
              backgroundSize: "contain", // Ensures the image stays within the bounds and is resized to fit
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents image repetition
              backgroundColor: "#FFDCDE", // Background color applied here
            }}
          >
            {/* Image Placeholder */}
          </label>
          <input type="file" id="mainImage" onChange={handleImageChange} hidden />
        </div>

        {/* Dish Name */}
        <input
          type="text"
          name="dishName"
          placeholder="Enter Dish Name"
          value={formData.dishName}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          style={{ backgroundColor: "#F0F0F0" }}
        />

        {/* Dish Description */}
        <textarea
          name="description"
          placeholder="Enter Dish Description.."
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          rows={3}
          style={{ backgroundColor: "#F0F0F0" }}
        ></textarea>

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="₹ Enter Dish Price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          style={{ backgroundColor: "#F0F0F0" }}
        />

        {/* Choose Dish Type & Dietary Type */}
        <div className="flex gap-4">
          {/* Choose Dish Type */}
          <div className="w-1/2">
            <label className="block mb-2 text-gray-600">Choose Dish Type</label>
            <select
              value={formData.dishType}
              onChange={handleDropdownChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              style={{ backgroundColor: "#F0F0F0" }}
            >
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          {/* Dietary Type */}
          <div className="w-1/2">
            <label className="block mb-2 text-gray-600">Dietary Type</label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`w-full p-3 border rounded-md ${
                  formData.dietaryType === "Non-Veg"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleDietaryChange("Non-Veg")}
              >
                Non-Veg
              </button>
              <button
                type="button"
                className={`w-full p-3 border rounded-md ${
                  formData.dietaryType === "Veg"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleDietaryChange("Veg")}
              >
                Veg
              </button>
            </div>
          </div>
        </div>

        {/* Upload Additional Images */}
        <div className="flex flex-col items-center">
          <span className="text-s text-black mt-2">Upload Additional Images</span>
          <label
            htmlFor="additionalImages"
            className="flex flex-col items-center justify-center w-32 h-32 rounded-lg cursor-pointer"
            style={{
              backgroundImage: `url(${uploadImage})`,
              backgroundSize: "contain", // Ensures the image is reduced in size but stays within bounds
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents image repetition
              backgroundColor: "#FFDCDE", // Background color applied here
            }}
          >
            {/* Image Placeholder */}
          </label>
          <input type="file" id="additionalImages" multiple onChange={handleAdditionalImages} hidden />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition duration-200"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
