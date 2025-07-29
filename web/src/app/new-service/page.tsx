'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreateServiceData, FormErrors } from '@/types';
import { api } from '@/services/api';

export default function NewServicePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<CreateServiceData>({
    name: '',
    price: 0,
    description: '',
  });
  const [priceInput, setPriceInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (formData.price <= 0) {
      newErrors.price = 'Preço deve ser maior que zero';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await api.createService(formData);
      router.push('/');
    } catch (error) {
      console.error('Erro ao criar serviço:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'price') {
      setPriceInput(value);
      const numValue = value === '' ? 0 : parseFloat(value) || 0;
      setFormData(prev => ({ ...prev, price: numValue }));
    } else if (name === 'description') {
      setFormData(prev => ({ ...prev, description: value || undefined }));
    } else if (name === 'name') {
      setFormData(prev => ({ ...prev, name: value }));
    }
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Cadastrar Novo Serviço</h1>
            <button
              onClick={() => router.push('/')}
              className="bg-neutral-600 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                Nome do Serviço *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 text-gray-800 rounded-md focus:ring-1 ${
                  errors.name ? 'border-danger' : 'border-neutral-400'
                }`}
                placeholder="Digite o nome do serviço"
              />
              {errors.name && (
                <p className="text-danger text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-800 mb-1">
                Preço (R$) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={priceInput}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 rounded-md text-gray-800 focus:ring-1 focus:ring-primary ${
                  errors.price ? 'border-danger' : 'border-neutral-400'
                }`}
                placeholder="0.00"
              />
              {errors.price && (
                <p className="text-danger text-sm mt-1">{errors.price}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-800 mb-1">
                Descrição (opcional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 text-gray-800 rounded-md focus:ring-1 focus:ring-primary"
                placeholder="Digite uma descrição do serviço"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => router.push('/')}
                className="flex-1 bg-neutral-600 text-white py-2 px-4 rounded-md hover:bg-neutral-700 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-success text-white py-2 px-4 rounded-md hover:bg-success-600 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Cadastrando...' : 'Cadastrar Serviço'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 