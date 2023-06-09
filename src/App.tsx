import './App.css';
import HomeMain from './pages/HomeMain';
import WalletLink from './pages/WalletLink';
import KeyGenPage from './pages/KeyGenPage';
import TransactionPage from './pages/TransactionPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Functionality
// Account

// "Create a new Solana account" button exists

// New keypair is generated
// Two SOL is airdropped to the keypair
// Wallet

// "Connect to Phantom Wallet" button exists

// Phantom Wallet is connected or a link is provided for installing the extension
// Transaction

// "Transfer to new wallet" button exists"

// Two SOL from account (Step 1) is transferred to the connected wallet (Step 2)
// Explanation
// Code read-aloud is submitted
// Code read-aloud is complete (all steps explained)
// Code read-aloud is clear and understandable


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMain/>,
  },
  {
    path: "/phantomwall",
    element: <WalletLink/>,
  },
  {
    path: "/transactionPage",
    element: <TransactionPage/>,
  },
  {
    path: "/w-gen",
    element: <KeyGenPage/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
