import React, {useEffect, useState} from 'react';

import axios from "axios";
import ContactPage from "./ContactPage";

export default function ContactList() {

    const [people, setPeople] = useState({ peopleList: undefined, filteredList: undefined });
    const [selected, setSelected] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data)
            setPeople({ filteredList: res.data, peopleList:res.data})
        })
    }, []);

    if (!people.peopleList) {
        return(<h1>Loading...</h1>)
    }

    const filterData = (e) => {
        const results = people.peopleList.filter(
            (person) => person.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                person.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
                person.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
                person.website.toLowerCase().includes(e.target.value.toLowerCase()) ||
                person.phone.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setPeople({ ...people, filteredList: results });
    };

    const onClickHandler = ( person ) => {
        setSelected(person);
    }

    if (selected) {
        return(
            <ContactPage person={selected} onBack={() => setSelected(undefined)}/>
        );
    }

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form className="space-y-8 divide-y divide-gray-200 ">
                <div className="pt-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                Search
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    onChange={filterData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <br/>

            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Username
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Website
                                    </th>
                                    <th scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Phone
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {people.filteredList.map((person, personIdx) => (
                                    <tr key={person.id} className={personIdx % 2 === 0 ? 'bg-white hover:bg-purple-100' : 'bg-gray-50 hover:bg-purple-100'} onClick={() => onClickHandler(person)} >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.username}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.website}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.phone}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}