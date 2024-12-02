import React from 'react';
import { useForm } from '@inertiajs/react';

export default function UpdateProfileImageForm({ className }) {
    const { data, setData, patch, progress, errors } = useForm({
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'), { preserveScroll: true });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Update Profile Image</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your profile image to personalize your account.
                </p>
            </header>

            <form onSubmit={submit} encType="multipart/form-data" className="mt-6 space-y-6">
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Profile Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setData('image', e.target.files[0])}
                        className="mt-1 block w-full text-sm text-gray-600 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    {progress && <progress value={progress.percentage} max="100" className="mt-2 w-full" />}
                    {errors.image && <span className="text-sm text-red-600">{errors.image}</span>}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
}
