import React from 'react';

export default function ContactPage({ person, onBack }) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg mt-10">
            <div className="px-4 py-5 sm:p-6 grid justify-items-center ">
                <div
                    className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">{person.name}</h1>
                    </div>
                </div>

                <div className="mt-8">
                    <section aria-labelledby="applicant-information-title">
                        <div className="bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 id="applicant-information-title"
                                    className="text-lg leading-6 font-medium text-gray-900">
                                    Contact Information
                                </h2>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Username</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.username}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.email}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Website</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.website}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.phone}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Company</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.company.name}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">City</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{person.address.city}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                </div>
                <button type="button" className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onBack}> Back </button>
            </div>
        </div>
    );
}