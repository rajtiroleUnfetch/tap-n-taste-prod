import mongoose from 'mongoose';
import User from '../models/user.model';
import { hashPassword } from './hash.password';
import dotenv from 'dotenv';

dotenv.config();

async function createSuperAdmin() {
  try {
    await mongoose.connect("mongodb+srv://rajtirole2345:yTRf_N3A3QyyP5R@cluster1.xy31etg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",{
          dbName: 'tap-n-taste-unfetch-ai'
    });
    
    const hashedPassword = await hashPassword('admin123');
    console.log(`p${hashedPassword}p`);
    
    const user=await User.create({
      name: "Super Admin",
      email: "superadmin@tapntaste.com",
      password: hashedPassword,
      role: "SuperAdmin",
      status: "active"
    });

    console.log(user);
    

    console.log('SuperAdmin created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error creating SuperAdmin:', error);
    process.exit(1);
  }
}

createSuperAdmin();