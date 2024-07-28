import React, { useEffect, useState } from "react";
import {auth,db} from "./fire";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.uid); // Correct the collection name to 'users'
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } else {
      console.log("User is not logged in");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      fetchUserData(user);
    });
    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {userDetails.photo ? (
              <img
                src={userDetails.photo}
                alt="Profile"
                width={"10%"}
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <div style={{ width: "30%", borderRadius: "50%", backgroundColor: "gray", height: "200px" }}></div>
            )}
          </div>
          <h3>Welcome {userDetails.fullName} 🙏</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p> Name: {userDetails.fullName}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
