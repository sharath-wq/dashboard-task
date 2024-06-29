import { Eye, SquarePen, Trash2 } from 'lucide-react';
import Accordion from './components/accordion';
import { badges, data } from './constants';
import { useState } from 'react';

export default function App() {
    const [selectedBadge, setSelectedBadge] = useState('all');
    const [query, setQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (e: any) => {
        setQuery(e.target.value);
    };

    const handleBadgeClick = (id: any) => {
        setSelectedBadge(id);
    };

    console.log(selectedBadge);
    console.log(data);

    const filteredData = data.filter((item) => {
        const matchesBadge = selectedBadge === 'all' || item.status.toLowerCase() === selectedBadge.toLowerCase();
        const matchesQuery = item.agencyName.toLowerCase().includes(query.toLowerCase());
        return matchesBadge && matchesQuery;
    });

    return (
        <main className='w-full flex flex-col items-center justify-center'>
            <div className='p-4'>
                <div className='flex flex-row-reverse sm:flex-col items-start gap-4'>
                    <div className='relative flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto'>
                        <button
                            className='block sm:hidden px-4 py-2 rounded bg-gray-200 text-gray-800'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {selectedBadge}
                        </button>
                        {isDropdownOpen && (
                            <div className='absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10 lg:hidden'>
                                <div className='flex flex-col gap-2 p-2'>
                                    {badges.map((badge) => (
                                        <div
                                            key={badge.id}
                                            className={`badge px-4 py-2 rounded cursor-pointer transition-colors duration-300 ${
                                                selectedBadge === badge.id ? 'bg-blue-300 text-white' : ''
                                            }`}
                                            onClick={() => {
                                                handleBadgeClick(badge.id);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {badge.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className='hidden sm:flex flex-wrap gap-4'>
                            {badges.map((badge) => (
                                <div
                                    key={badge.id}
                                    className={`badge px-4 py-2 rounded cursor-pointer transition-colors duration-300 ${
                                        selectedBadge === badge.id ? 'bg-blue-300 text-white' : ''
                                    }`}
                                    onClick={() => handleBadgeClick(badge.id)}
                                >
                                    {badge.label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full border rounded-lg'>
                        <input
                            type='search'
                            id='default-search'
                            className='w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
                            placeholder='Search...'
                            required
                            value={query}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className='relative overflow-x-auto mt-10'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 border sm:block hidden'>
                    <thead className='text-xs bg-black text-white uppercase'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                REQUEST ID
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                AGENCY NAME
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                RECEIVED DATE
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                STATUS
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length ? (
                            filteredData.map((item) => (
                                <tr key={item.requestId} className='bg-white border-b'>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {item.requestId}
                                    </th>
                                    <td className='px-6 py-4'>{item.agencyName}</td>
                                    <td className='px-6 py-4'>{item.receivedDate}</td>
                                    <td className='px-6 py-4'>{item.status}</td>
                                    <td className='px-6 py-4 flex gap-2'>
                                        <Eye className='w-5 h-5 text-gray-500' />
                                        <SquarePen className='w-5 h-5 text-gray-500' />
                                        <Trash2 className='w-5 h-5 text-gray-500' />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <span>No Data</span>
                        )}
                    </tbody>
                </table>
            </div>
            {/* mobile */}
            <div className='w-full p-10'>
                <Accordion data={filteredData} />
            </div>
            {/* mobile end */}
        </main>
    );
}
