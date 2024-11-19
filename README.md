
# Vehicle Filter App

This project is a vehicle filter application built using **Next.js** and **Tailwind CSS**. It allows users to filter vehicles by make and model year and displays the available vehicle models for a selected combination.

## Features

- **Filter Page**: Allows users to select a vehicle make and model year.
- **Result Page**: Displays the list of vehicle models for the selected make and year.
- **Dynamic Routing**: Routes are dynamically generated based on the selected vehicle make and year.
- **API Integration**: Fetches vehicle make data and models from the [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/).
- **Responsive Design**: The app is fully responsive, built with **Tailwind CSS** for styling.

## Tech Stack

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **SWR**: A React hook library for data fetching and caching.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/car-dealer-app.git
   cd vehicle-filter-app
   ```

2. Install dependencies:

   If you're using **npm**:

   ```bash
   npm install
   ```

   If you're using **yarn**:

   ```bash
   yarn install
   ```

3. Run the development server:

   If you're using **npm**:

   ```bash
   npm run dev
   ```

   If you're using **yarn**:

   ```bash
   yarn dev
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## Folder Structure

- **/components**: Contains reusable UI components like `Button`, `DropDown`, and `ErrorBoundary`.
- **/app**: Contains the pages for the filter and result views.
- **/styles**: Contains global styles and Tailwind CSS configuration.

## API Endpoints

### Vehicle Makes

The vehicle makes are fetched from the following endpoint:

```
https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json
```

### Vehicle Models

The vehicle models for a selected make and year are fetched from the following endpoint:

```
https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json
```

## How It Works

1. **Filter Page**: 
   - The user selects a vehicle make and model year from dropdowns. The list of vehicle makes is fetched from the NHTSA API and displayed in a dropdown. The model years range from 2015 to the current year.
   - When both a vehicle make and model year are selected, the "Next" button becomes enabled.

2. **Result Page**:
   - The page dynamically generates paths based on the selected vehicle make and year.
   - The available vehicle models for the selected make and model year are fetched from the API and displayed in a list.

3. **Static Generation**:
   - The `generateStaticParams` function pre-renders all possible make and year combinations for static paths.

## Contributions

Feel free to fork this repository and submit pull requests for improvements or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
