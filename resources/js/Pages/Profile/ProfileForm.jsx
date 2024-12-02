import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const ProfileForm = ({ user }) => {
    const [profileImage, setProfileImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile_image', profileImage);
        Inertia.post(route('profile.update'), formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">
                    Upload Profile Image
                </label>
                <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    className="mt-1 block w-full"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Update Profile
            </button>
        </form>
    );
};

export default ProfileForm;
