import ordersData from '../../../data/orders.json'; 
import OrderDatePicker from './OrderDatePicker';

const DashboardSummary = ({  }) => {

    // Initialize metrics
let totalRevenue = 0;
let orderItems = 0;
let returnItems = 0; // Assuming return items are marked with a specific status
let fulfilledOrders = 0;

// Iterate through the orders to calculate metrics
ordersData.forEach(order => {
  // Calculate total revenue
  totalRevenue += order.totalAmount.grandTotal;

  // Calculate total order items
  order.products.forEach(product => {
    orderItems += product.quantity;
  });

  // Check if the order is fulfilled
  if (order.status === 'Shipped' || order.status === 'Delivered') {
    fulfilledOrders += 1;
  }

  // Calculate return items (assuming return items have a specific status)
  if (order.status === 'Returned') {
    returnItems += 1;
  }
});
    const summaryData = [
        { label: 'Total Revenue', value: `$${totalRevenue}` },
        { label: 'Order Items', value: orderItems },
        { label: 'Return Items', value: returnItems },
        { label: 'Fulfilled Orders', value: fulfilledOrders },
    ];

    return (
        <div className="flex flex-col items-center justify-between w-full pb-6 mx-auto space-y-6 border-b-2 border-[#EAECF0] md:flex-row md:space-y-0 md:space-x-8">
            <div className="relative flex items-center">
                <OrderDatePicker/>
                {/* <span className="ml-2 text-gray-600">
                    {startDate ? format(startDate, 'MM/dd/yyyy') : ''}
                </span> */}
            </div>
            
            <div className="grid w-full border border-[#EAECF0] rounded-lg grid-cols-2 md:grid-cols-4">
            {summaryData.map((item, index) => (
                <div key={index} className={`flex flex-col ml-5 py-2.5 items-start ${index !== summaryData.length - 1 ? 'border-r border-[#EAECF0]' : ''}`}>
                    <span className="text-sm font-medium text-gray-500">{item.label}</span>
                    <span className="text-base font-bold text-gray-[#323232]">{item.value}</span>
                </div>
            ))}
        </div>
        </div>
    );
};

export default DashboardSummary;
