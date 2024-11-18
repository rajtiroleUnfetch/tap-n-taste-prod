// import { render } from '@testing-library/react';

// import {TSearchbar} from './t-searchbar';

// describe('TSearchbar', () => {
//   it('should render successfully', () => {
//     const { baseElement } = render(<TSearchbar/>);
//     expect(baseElement).toBeTruthy();
//   });
// });
import { render, screen } from '@testing-library/react';
// Import as default since it's exported as default
import {TSearchbar} from './t-searchbar';

describe('TSearchbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TSearchbar />);
    expect(baseElement).toBeTruthy();
  });
});


