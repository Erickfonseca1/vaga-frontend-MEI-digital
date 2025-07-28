import { Contract } from '@/types';

type ContractCardProps = {
  contract: Contract;
};

const ContractCard = ({ contract }: ContractCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      case 'concluido':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{contract.serviceName}</h3>
        <span className="text-2xl font-bold text-green-600">
          R$ {contract.servicePrice.toFixed(2)}
        </span>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Contratado em: {formatDate(contract.contractDate)}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
          {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default ContractCard;