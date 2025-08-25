"use client"

import React from "react"

import Image from "next/image"

import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components"
import { dark } from "@/context"
import {
  AddFormImg,
  AddressDarkImg,
  AddressImg,
  AddRestaurantDarkImg,
  CartDarkImg,
  CartImg,
  DashbiteHomeDarkImg,
  DashbiteHomeImg,
  DeliveryInfoDarkImg,
  DeliveryInfoImg,
  DishDarkImg,
  DishImg,
  ERDImg,
  LoginDarkImg,
  LoginImg,
  OrderHistoryDarkImg,
  OrderHistoryImg,
  OverviewDarkImg,
  OverviewImg,
  PhotosDarkImg,
  PhotosImg,
  ProfileHomeDarkImg,
  ProfileHomeImg,
  RestaurantDarkImg,
  RestaurantImg,
  RestaurantsDarkImg,
  RestaurantsImg,
  ReviewsDarkImg,
  ReviewsImg,
  SignupDarkImg,
  SignupImg,
  StripeImg,
  UpdateFormImg,
  UpdateRestaurantDarkImg,
} from "@/img"
import { useTheme } from "@/providers"
import { PageHeader } from "@/sections"

const DashbiteProjectPage = () => {
  const { theme } = useTheme()
  return (
    <div className="flex flex-col gap-4">
      <PageHeader page="dashbite" />
      <div className="flex flex-col gap-13 md:gap-24">
        <div className="flex flex-col gap-6 md:flex-row md:justify-center">
          <div className="flex flex-col gap-6 md:flex-1">
            <p>
              DashBite is designed to be a full-stack web application that
              facilitates food ordering and delivery. It connects customers with
              restaurants, allowing users to browse menus, place orders, and
              track deliveries. The system is divided into three main
              components:
            </p>
            <ul>
              <li>Frontend (ReactJS + TailwindCSS)</li>
              <li>Backend (Node.js + Express + MongoDB)</li>
              <li>Admin Dashboard (React-based interface for management)</li>
            </ul>
          </div>
          <div className="flex items-center justify-center md:flex-1">
            <Image
              src={theme === dark ? DashbiteHomeDarkImg : DashbiteHomeImg}
              alt="Starter Home Image"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>UX Research Insights: Designing for Real Food Needs</h2>
          <p>
            In shaping DashBite&apos;s user experience, I focused on secondary
            research and competitive analysis to identify common pain points and
            expectations in food discovery apps. By studying existing platforms
            and analyzing user reviews, I uncovered key trends that guided the
            design of the Dish Detail Page.
          </p>
          <h3>🔍 Key Observations</h3>
          <ul>
            <li>
              <span className="underline">Health-Conscious Behavior:</span> Many
              users rely on calorie tracking apps and expect nutritional
              transparency when browsing food options.
            </li>
            <li>
              <span className="underline">Allergy Awareness:</span> Popular food
              platforms often lack clear allergen labeling, leading to
              frustration and safety concerns among users with dietary
              restrictions.
            </li>
            <li>
              <span className="underline">Ingredient Curiosity:</span> Users
              frequently ask “What&apos;s in this?”—whether for ethical,
              religious, or culinary reasons. Ingredient visibility is a growing
              expectation.
            </li>
          </ul>
          <p>
            These insights informed the inclusion of nutrition and
            safety-focused features in DashBite.
          </p>
          <h3>🍽️ Feature Integration: Nutrition & Safety First</h3>
          <p>To address these user needs, each dish in DashBite includes:</p>
          <Table>
            <TableCaption>Dish Page Elements</TableCaption>
            <TableHeader>
              <TableHead className="uppercase">Feature</TableHead>
              <TableHead className="uppercase">Purpose</TableHead>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Calorie Card</TableCell>
                <TableCell>
                  Displays calories, protein, fat, carbs, and serving size
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ingredients</TableCell>
                <TableCell>
                  Lists all components used to prepare the dish
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Allergens</TableCell>
                <TableCell>
                  Highlights common allergens present in the dish (e.g., nuts,
                  dairy)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>
            These elements are designed to be visually accessible and easy to
            scan, empowering users to make informed decisions.
          </p>
          <h3>🎨 Design Considerations</h3>
          <ul>
            <li>
              <span className="underline">Visual Hierarchy:</span> Nutritional
              info and allergens are grouped near the dish image and name
            </li>
            <li>
              <span className="underline">Iconography:</span> Used intuitive
              icons for nutrients and allergens to enhance readability
            </li>
            <li>
              <span className="underline">Accessibility:</span> Ensured all info
              is screen-reader friendly and mobile responsive
            </li>
          </ul>
          <h3>💡 Why It Matters</h3>
          <p>By integrating these features, DashBite supports:</p>
          <ul>
            <li>Informed choices for users tracking health goals</li>
            <li>Safe browsing for users with allergies or sensitivities</li>
            <li>
              Transparent dining for users who care about what&apos;s in their
              food
            </li>
          </ul>
          <p>
            This approach not only improves usability but also builds
            trust—making DashBite a more inclusive and thoughtful platform.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Frontend Architecture (ReactJS + TailwindCSS)</h2>
          <p>
            The frontend is built using ReactJS for dynamic UI rendering and
            TailwindCSS for styling. It&apos;s designed to be responsive,
            intuitive, and scalable across devices. Navigation is handled using
            React Router, enabling clean route management and dynamic page
            transitions.
          </p>
          <p>
            To safeguard user-specific pages like profile, orders, and reviews,
            the app uses a custom ProtectedRoute component. This ensures that
            only authenticated users can access sensitive routes—such as
            /myorders, /profile, and /address—by checking for valid login
            credentials (via JWT tokens) and redirecting unauthenticated users
            to the login page.
          </p>
          <h3>🧠 Global State Management with StoreProvider</h3>
          <p>
            At the heart of the frontend lies the StoreProvider, a React Context
            Provider that centralizes shared state and logic across the app. It
            wraps the application and exposes values and functions through the
            StoreContext, making them accessible to any component.
          </p>
          <h4>Responsibilities of StoreProvider:</h4>
          <p>🛒 Cart Management</p>
          <ul>
            <li>Initializes cartItems from localStorage for persistence.</li>
            <li>
              Provides:
              <ul className="pl-10!">
                <li className="pt-6">
                  addToCart: Adds an item and syncs with backend.
                </li>
                <li>removeFromCart: Decreases quantity or removes item.</li>
                <li>deleteFromCart: Removes item entirely.</li>
              </ul>
            </li>
            <li>Automatically saves cart updates to localStorage.</li>
          </ul>
          <p>🔐 User Authentication</p>
          <ul>
            <li>Retrieves JWT token from localStorage</li>
            <li>Decodes it using jwtDecode to extract userID</li>
            <li>Redirects to /login if token is invalid or missing</li>
          </ul>
          <p>📦 Data Fetching</p>
          <p>On initial load (useEffect), it fetches:</p>
          <ul>
            <li>Dishes from /api/dish</li>
            <li>Categories from /api/category</li>
            <li>Cuisines from /api/cuisine</li>
            <li>
              Restaurants from /api/restaurant, enriched with related dishes and
              cuisines
            </li>
          </ul>
          <p>🔁 Backend Sync</p>
          <ul>
            <li>
              If a user is logged in, cart actions are mirrored to the backend
              via axios.
            </li>
          </ul>
          <p>📣 Toast Notifications</p>
          <ul>
            <li>
              Uses useToast() to display error messages when API calls fail.
            </li>
          </ul>
          <div className="gap-auto flex lg:flex-wrap">
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? CartDarkImg : CartImg}
                alt="Cart Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">Cart Page</Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? DeliveryInfoDarkImg : DeliveryInfoImg}
                alt="Delivery Information Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Delivery Info Page on clicking the Checkout Button
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image src={StripeImg} alt="Stripe Image" className="w-full" />
              <Button className="absolute bottom-4 left-4">
                Stripe Page on clicking Proceed to Payment Button
              </Button>
            </div>
          </div>
          <h3>🚀 Key Features</h3>
          <ul>
            <li>
              <span className="underline">User Authentication:</span> Secure
              login and registration using JWT tokens.
            </li>
            <li>
              <span className="underline">Menu Browsing:</span> Explore
              restaurants, categories, and dishes.
            </li>
            <li>
              <span className="underline">Order Management:</span> Place orders
              and track their status.
            </li>
            <li>
              <span className="underline">Review System:</span> Leave feedback
              and ratings for dishes and restaurants.
            </li>
            <li>
              <span className="underline">Cart Sync:</span> Persistent cart
              state with backend integration.
            </li>
          </ul>
          <div className="gap-auto flex lg:flex-wrap">
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? DishDarkImg : DishImg}
                alt="Dish Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">Dish Page</Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? PhotosDarkImg : PhotosImg}
                alt="Photos Tab of Restaurant Page"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Photos Tab of Restaurant Page
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? ReviewsDarkImg : ReviewsImg}
                alt="Reviews Tab of Restaurant Page"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Reviews Tab of Restaurant Page
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? OverviewDarkImg : OverviewImg}
                alt="Overview Tab of Restaurant Page"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Overview Tab of Restaurant Page
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? LoginDarkImg : LoginImg}
                alt="Login Page"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">Login Page</Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? SignupDarkImg : SignupImg}
                alt="Sign up Page"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">Sign up Page</Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? ProfileHomeDarkImg : ProfileHomeImg}
                alt="Profile Page of Logged In User"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Profile Page of Logged In User
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? AddressDarkImg : AddressImg}
                alt="Address Page of Logged In User"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Address Page of Logged In User
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? ReviewsDarkImg : ReviewsImg}
                alt="Reviews Page of Logged In User"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Reviews Page of Logged In User
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/3">
              <Image
                src={theme === dark ? OrderHistoryDarkImg : OrderHistoryImg}
                alt="Order History Page of Logged In User"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Order History Page of Logged In User
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Backend (Node.js + Express + MongoDB)</h2>
          <p>
            I built the backend using Node.js and Express.js, with MongoDB Atlas
            as the cloud-hosted database. It manages all the core parts of my
            application—users, dishes, restaurants, orders, reviews, categories,
            and cuisines. For security, I&apos;ve implemented authentication
            using JSON Web Tokens (JWT) for users and a static token system for
            admins. Image uploads are handled using Multer, a middleware for
            file handling in Express.
          </p>
          <h3>🔗 How I Connect to the Database</h3>
          <p>
            The backend connects to MongoDB Atlas using a secure connection
            string. The password is stored in an environment variable to keep it
            protected. Once the connection is successful, the server logs a
            confirmation message. This connection is established using Mongoose,
            a Node.js ODM library, before any API requests are handled.
          </p>
          <p>
            This library gives me a solid foundation for building polished,
            responsive UIs with consistent styling and behavior—perfectly
            aligned with my Tailwind-based design system.
          </p>
          <h3>🔐 My Authentication System</h3>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <p className="font-bold">1. Admin Authentication</p>
              <p className="pt-5">
                Admins are authenticated using a static token stored in an
                environment variable. This token is checked against incoming
                requests to grant or deny access to admin-only routes.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">2. User Authentication</p>
              <p className="pt-5">
                Users are authenticated using JSON Web Tokens (JWT). When a user
                logs in, the backend generates a token using the jsonwebtoken
                library. This token must be included in future requests and is
                verified to extract the user&apos;s ID and validate session
                access.
              </p>
            </div>
          </div>
          <h3>🧩 How I Handle Routing and Access Control</h3>
          <p>
            I&apos;ve separated routes based on access level using Express
            Router and custom middleware:
          </p>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <p className="font-bold">For Users (Frontend Access):</p>
              <p className="pt-5">
                <ul>
                  <li>Registering and logging in</li>
                  <li>Viewing and managing their cart</li>
                  <li>Placing and tracking orders</li>
                  <li>Writing and editing reviews</li>
                  <li>
                    Browsing dishes, categories, cuisines, and restaurants
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">For Admins (Dashboard Access)</p>
              <ul>
                <li>
                  Creating, updating, and deleting dishes, categories, cuisines,
                  and restaurants
                </li>
                <li>Managing user accounts and orders</li>
                <li>Uploading images for various entities</li>
              </ul>
              <p>These routes are protected by admin token-based middleware.</p>
            </div>
          </div>
          <h3>🖼️ How I Handle Image Uploads</h3>
          <p>
            Image uploads are managed using Multer, a middleware for handling
            multipart/form-data in Express. Here&apos;s how it&apos;s set up:
          </p>
          <ul>
            <li>
              <span className="underline">Storage:</span> Images are saved in a
              local uploads folder.
            </li>
            <li>
              <span className="underline">Naming:</span> Each file is renamed
              with a timestamp to ensure uniqueness.
            </li>
            <li>
              <span className="underline">Upload Types:</span>
              <ul className="pl-10!">
                <li className="pt-5">
                  Single image uploads for profile pictures, dish images, and
                  category icons
                </li>
                <li>Multiple image uploads for restaurant galleries</li>
              </ul>
            </li>
            <li>
              <span className="underline">Access:</span> Uploaded images are
              served via a public route using Express static middleware,
              allowing the frontend to display them.
            </li>
            <li>
              <span className="underline">Validation:</span> The system
              restricts uploads to common image formats like .jpg, .jpeg, and
              .png, and enforces file size limits
            </li>
          </ul>
          <h3>🧪 My Data Validation Approach</h3>
          <p>
            Validation is handled using a custom utility called
            validationUtils.js. This utility includes a function that checks
            whether all required fields are present in incoming data before
            processing it.
          </p>
          <ul>
            <li>
              For most entities, the system checks if any required fields are
              missing or empty. If so, it returns an error message listing the
              missing fields.
            </li>
            <li>
              For user updates, the logic is more flexible. Instead of requiring
              all fields, it ensures that at least one valid field is provided.
              This allows partial updates while still maintaining data
              integrity.
            </li>
          </ul>
          <p>
            This approach keeps the backend robust and user-friendly, ensuring
            that invalid or incomplete data is caught early in the request
            lifecycle.
          </p>
          <h3>📊 Entity Relationship Diagram (ERD)</h3>
          <p>
            To visualize how my data is structured, I created an ERD that maps
            out the relationships between key entities like users, orders,
            dishes, restaurants, and reviews:
          </p>
          <Image
            src={ERDImg}
            alt="Entity Relationship Diagram Image"
            className="w-full"
          />
          <p>
            This diagram helps me understand how everything connects—for
            example, how users place orders, how dishes are linked to
            restaurants, and how reviews relate to both.
          </p>
          <h3>🔗 How My Frontend and Admin Panel Connect</h3>
          <p>Frontend (User Interface): </p>
          <ul>
            <li>
              Sends requests to user-specific endpoints like /api/user,
              /api/cart, and /api/order
            </li>
            <li>Includes a JWT token in headers for authentication</li>
            <li>
              Displays images by accessing /images/[filename] served by Express
            </li>
          </ul>
          <p>Admin Panel:</p>
          <ul>
            <li>
              Sends requests to admin-only endpoints like /api/dish and
              /api/restaurant
            </li>
            <li>Uses a static admin token for secure access</li>
            <li>Uploads images using form data, processed by Multer</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Admin Dashboard</h2>
          <p>
            The admin panel is a React-based interface that allows
            administrators to manage the platform.
          </p>
          <h3>🧰 Key Features</h3>
          <ul>
            <li>
              <span className="underline">Restaurant Management:</span>{" "}
              Add/edit/delete restaurant profiles.
            </li>
            <li>
              <span className="underline">Dish Management:</span> Manage menus
              and categories.
            </li>
            <li>
              <span className="underline">Order Oversight:</span> View and
              process orders.
            </li>
            <li>
              <span className="underline">User Reviews:</span> Monitor and
              moderate feedback.
            </li>
          </ul>
          <h3>📋 What&apos;s Displayed in Each Admin Page</h3>
          <p>
            Each page in the admin panel—whether it&apos;s for categories,
            dishes, users, orders, or restaurants—follows a consistent
            structure. The goal is to fetch data from the backend, display it in
            a table, and provide actions like view, update, or delete.
          </p>
          <p>
            Each page component (like Categories, Dishes, Users, etc.) does the
            following:
          </p>
          <ul>
            <li>
              Fetches data from the backend using a helper function like
              fetchEndpoint().
            </li>
            <li>Stores the data in local state using useState.</li>
            <li>Displays the data in a reusable {"<Table />"} component.</li>
            <li>
              Provides buttons to:
              <ul className="pt-5 pl-10">
                <li>Add a new item (/add_form)</li>
                <li>Update an existing item (/update_form)</li>
                <li>Delete an item</li>
              </ul>
            </li>
          </ul>
          <div className="flex lg:flex-wrap">
            <div className="relative flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={theme === dark ? RestaurantsDarkImg : RestaurantsImg}
                alt="Restaurants Table Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Restaurants Table
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={theme === dark ? RestaurantDarkImg : RestaurantImg}
                alt="View of a restaurant Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                View of a restaurant
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={theme === dark ? AddRestaurantDarkImg : AddFormImg}
                alt="Add Restaurant Form Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Form to add new restaurant
              </Button>
            </div>
            <div className="relative flex w-full items-center justify-center lg:w-1/2">
              <Image
                src={theme === dark ? UpdateRestaurantDarkImg : UpdateFormImg}
                alt="Form to update details of a restaurant Image"
                className="w-full"
              />
              <Button className="absolute bottom-4 left-4">
                Form to update details of a restaurant
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Challenges & What I&apos;d Do Differently</h2>
          <p>
            Building DashBite was a rewarding experience, but like any project,
            it came with its share of challenges and trade-offs. Reflecting on
            the process, here are a few areas I&apos;d approach differently in
            future iterations:
          </p>
          <h3>🔐 Admin Authentication via Static Token</h3>
          <ul>
            <li>
              <span className="underline">
                <span className="underline">Challenge:</span>
              </span>{" "}
              The admin panel currently uses a static token for authentication,
              which is hardcoded and separate from the user authentication
              system (which uses JWT).
            </li>
            <li>
              <span className="underline">Why It&apos;s a Concern:</span> While
              this method was quick to implement, it lacks scalability and
              security. Static tokens can be easily compromised and don&apos;t
              support role-based access or session expiration.
            </li>
            <li>
              <span className="underline">
                <span className="underline">What I&apos;d Do Differently:</span>
              </span>{" "}
              I&apos;d unify the authentication system by extending JWT to
              admins, implementing role-based access control (RBAC), and adding
              token expiration and refresh mechanisms for better security and
              maintainability.
            </li>
          </ul>
          <h3>🧪 Limited UX Testing</h3>
          <ul>
            <li>
              <span className="underline">Challenge:</span> Without direct user
              interviews or usability testing, design decisions were based on
              assumptions and competitive analysis.
            </li>
            <li>
              <span className="underline">What I&apos;d Do Differently:</span>{" "}
              I&apos;d incorporate lightweight usability testing—such as remote
              task-based feedback or A/B testing—to validate design choices and
              uncover blind spots.
            </li>
          </ul>
          <h3>📱 Mobile Responsiveness</h3>
          <ul>
            <li>
              <span className="underline">Challenge:</span> Some components
              required extra tweaking to behave consistently across screen
              sizes.
            </li>
            <li>
              <span className="underline">What I&apos;d Do Differently:</span>{" "}
              I&apos;d adopt a mobile-first design approach from the start and
              use a responsive design system to streamline layout adjustments.
            </li>
          </ul>
          <h3>🧼 Data Validation & Error Handling</h3>
          <ul>
            <li>
              <span className="underline">Challenge:</span> Early versions
              lacked robust validation and graceful error messaging, especially
              in form inputs and API responses.
            </li>
            <li>
              <span className="underline">What I&apos;d Do Differently:</span>{" "}
              I&apos;d implement a centralized validation schema (e.g., using
              Zod or Yup) and design user-friendly error states to improve
              reliability and UX.
            </li>
          </ul>
          <h3>🧠 Feature Scope Creep</h3>
          <ul>
            <li>
              <span className="underline">Challenge:</span> As ideas evolved,
              new features were added mid-development, which affected timelines
              and focus.
            </li>
            <li>
              <span className="underline">What I&apos;d Do Differently:</span>{" "}
              I&apos;d define a stricter MVP scope and use a feature backlog to
              prioritize enhancements post-launch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashbiteProjectPage
