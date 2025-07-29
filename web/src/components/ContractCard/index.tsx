import { Contract } from '@/types';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard = ({ contract }: ContractCardProps) => {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start p-4 sm:p-6 gap-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-1 min-w-0">{contract.serviceName}</h3>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 self-start sm:self-auto whitespace-nowrap">
          {formatPrice(contract.servicePrice)}
        </span>
      </div>
      <hr className="border-t border-gray-200" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-100 py-3 sm:py-4 px-4 sm:px-6 rounded-b-lg gap-2">
        <div className="text-sm text-gray-600 flex-1 min-w-0">
          Contratado por: {contract.customerName}
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 bg-gray-200 self-start sm:self-auto whitespace-nowrap">
          {formatDate(contract.contractDate)}
        </span>
      </div>
    </div>
  );
};

export default ContractCard;