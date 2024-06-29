import { useState, FC, ReactNode } from 'react';
import { Data } from '../constants/index';
import { ChevronDown, Eye, SquarePen, Trash2 } from 'lucide-react';

interface AccordionItemProps {
    requestId: number;
    title: string;
    children: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ requestId, title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h2 id={`accordion-collapse-heading-${requestId}`}>
                <button
                    type='button'
                    className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl gap-3'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-collapse-body-${requestId}`}
                >
                    <span>{title}</span>
                    <ChevronDown className={`${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div
                id={`accordion-collapse-body-${requestId}`}
                className={`${isOpen ? '' : 'hidden'}`}
                aria-labelledby={`accordion-collapse-heading-${requestId}`}
            >
                <div className='p-5 border border-b-0 border-gray-200 '>{children}</div>
            </div>
        </div>
    );
};

const Accordion = ({ data }: { data: Data[] }) => {
    return (
        <div id='accordion-collapse' data-accordion='collapse' className='sm:hidden block w-full'>
            {data.map((item: Data) => (
                <AccordionItem key={item.requestId} requestId={item.requestId} title={item.agencyName}>
                    <p className='mb-2 text-gray-500 '>Request Id: {item.requestId}</p>
                    <p className='mb-2 text-gray-500 '>Received Date: {item.receivedDate}</p>
                    <p className='text-gray-500 '>Status: {item.status}</p>
                    <div className='flex w-full justify-end gap-2'>
                        <Eye className='w-5 h-5 text-gray-500' />
                        <SquarePen className='w-5 h-5 text-gray-500' />
                        <Trash2 className='w-5 h-5 text-gray-500' />
                    </div>
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
