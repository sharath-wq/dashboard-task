export interface Data {
    requestId: number;
    agencyName: string;
    receivedDate: string;
    status: string;
}

export const badges = [
    { id: 'all', label: 'All Request' },
    { id: 'approved', label: 'Approved' },
    { id: 'awaiting', label: 'Awaiting' },
    { id: 'awaiting-responses', label: 'Awaiting Responses' },
    { id: 'rejected', label: 'Rejected' },
];

export const data = [
    {
        requestId: 1,
        agencyName: 'Agency One',
        receivedDate: '2024-06-01',
        status: 'Awaiting',
    },
    {
        requestId: 2,
        agencyName: 'Agency Two',
        receivedDate: '2024-06-02',
        status: 'Approved',
    },
    {
        requestId: 3,
        agencyName: 'Agency Three',
        receivedDate: '2024-06-03',
        status: 'Rejected',
    },
    {
        requestId: 4,
        agencyName: 'Agency Four',
        receivedDate: '2024-06-04',
        status: 'awaiting_approval',
    },
    {
        requestId: 5,
        agencyName: 'Agency Five',
        receivedDate: '2024-06-05',
        status: 'Approved',
    },
    {
        requestId: 6,
        agencyName: 'Agency Six',
        receivedDate: '2024-06-06',
        status: 'Rejected',
    },
    {
        requestId: 7,
        agencyName: 'Agency Seven',
        receivedDate: '2024-06-07',
        status: 'Awaiting',
    },
    {
        requestId: 8,
        agencyName: 'Agency Eight',
        receivedDate: '2024-06-08',
        status: 'Approved',
    },
    {
        requestId: 9,
        agencyName: 'Agency Nine',
        receivedDate: '2024-06-09',
        status: 'awaiting-responses',
    },
    {
        requestId: 10,
        agencyName: 'Agency Ten',
        receivedDate: '2024-06-10',
        status: 'Rejected',
    },
];
