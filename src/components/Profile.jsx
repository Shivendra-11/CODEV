import React, { useEffect, useState } from 'react';
import { auth, db } from './Firebase'; // Make sure you have initialized Firebase
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const currentUser = auth.currentUser;

      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setPhotoURL(currentUser.photoURL || '');

        // Optionally fetch additional data from Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          // Handle additional user data if necessary
          const userData = userDoc.data();
          setDisplayName(userData.displayName || '');
          setPhotoURL(userData.photoURL || '');
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        // Update displayName and photoURL in Firebase Auth
        await user.updateProfile({
          displayName,
          photoURL,
        });

        // Optionally update Firestore
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          displayName,
          photoURL,
        });

        toast.success('Profile updated successfully!');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='py-28'>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold">User Profile</h2>
        {user ? (
          <div>
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src={photoURL || 'https://via.placeholder.com/150'}
                alt={displayName || 'User'}
              />
              <div>
                <h3 className="text-xl font-semibold">{displayName || 'No Name'}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Display Name"
                className="p-2 border border-gray-300 rounded-lg w-full mb-2"
              />
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Photo URL"
                className="p-2 border border-gray-300 rounded-lg w-full mb-4"
              />
              <button
                onClick={handleUpdateProfile}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Update Profile
              </button>
            </div>
          </div>
        ) : (
          <p>No user is signed in</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
