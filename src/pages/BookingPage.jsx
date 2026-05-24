import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const BookingPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    petType: '',
    date: '',
    time: '',
    staff: '',
    petName: '',
    petWeight: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    notes: '',
  });

  const services = [
    { id: 'grooming', icon: 'content_cut', price: '300,000 - 800,000' },
    { id: 'spa', icon: 'spa', price: '500,000 - 1,200,000' },
    { id: 'training', icon: 'school', price: '2,000,000 - 5,000,000' },
    { id: 'hotel', icon: 'hotel', price: '200,000 - 500,000' },
  ];

  const petTypes = [
    { id: 'dog', icon: 'pets' },
    { id: 'cat', icon: 'pets' },
    { id: 'rabbit', icon: 'cruelty_free' },
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const staff = [
    { id: '1', name: 'Nguyễn Văn A', specialty: 'Grooming Expert' },
    { id: '2', name: 'Trần Thị B', specialty: 'Spa Specialist' },
    { id: '3', name: 'Lê Văn C', specialty: 'Training Coach' },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to backend
    alert('Booking submitted successfully! We will contact you soon.');
    navigate('/');
  };

  const canProceed = () => {
    if (step === 1) return formData.service && formData.petType;
    if (step === 2) return formData.date && formData.time;
    if (step === 3) return formData.petName && formData.ownerName && formData.ownerPhone;
    return false;
  };

  return (
    <div className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-primary-50 via-neutral-100 to-secondary-50 min-h-screen">
      {/* Floating Quick Contact for Booking Page */}
      <div className="fixed bottom-24 right-6 z-40 hidden lg:flex flex-col gap-3">
        <a
          href="tel:1900888666"
          className="w-12 h-12 rounded-lg bg-white shadow-ambient-lg hover:shadow-ambient border-2 border-primary-200 flex items-center justify-center transition-all hover:scale-110 group"
          title="Hotline: 1900 888 666"
        >
          <span className="material-icons text-primary-600 group-hover:scale-110 transition-transform">call</span>
        </a>
        <a
          href="https://zalo.me/1900888666"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-lg bg-white shadow-ambient-lg hover:shadow-ambient border-2 border-blue-200 flex items-center justify-center transition-all hover:scale-110 group"
          title="Chat Zalo"
        >
          <span className="material-icons text-blue-500 group-hover:scale-110 transition-transform">chat</span>
        </a>
        <a
          href="https://m.me/greenpaws"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-lg bg-white shadow-ambient-lg hover:shadow-ambient border-2 border-blue-200 flex items-center justify-center transition-all hover:scale-110 group"
          title="Messenger"
        >
          <span className="material-icons text-blue-600 group-hover:scale-110 transition-transform">message</span>
        </a>
      </div>

      {/* Mobile Bottom Contact Bar for Booking */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-300 shadow-ambient-lg lg:hidden">
        <div className="grid grid-cols-3 divide-x divide-neutral-200">
          <a
            href="tel:1900888666"
            className="flex flex-col items-center justify-center py-3 hover:bg-primary-50 transition-colors active:bg-primary-100"
          >
            <span className="material-icons text-primary-600 text-xl mb-1">phone</span>
            <span className="text-xs text-neutral-700 font-medium">Gọi ngay</span>
          </a>
          <a
            href="https://zalo.me/1900888666"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 hover:bg-blue-50 transition-colors active:bg-blue-100"
          >
            <span className="material-icons text-blue-500 text-xl mb-1">chat</span>
            <span className="text-xs text-neutral-700 font-medium">Zalo</span>
          </a>
          <a
            href="https://m.me/greenpaws"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 hover:bg-blue-50 transition-colors active:bg-blue-100"
          >
            <span className="material-icons text-blue-600 text-xl mb-1">message</span>
            <span className="text-xs text-neutral-700 font-medium">Messenger</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-h2 font-heading font-bold text-neutral-900 mb-4">
            {t('booking.title')}
          </h1>
          
          {/* Progress Steps */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center space-x-2 ${step >= s ? 'text-primary-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {s}
                  </div>
                  <span className="hidden sm:inline font-medium">{t(`booking.step${s}`)}</span>
                </div>
                {s < 3 && <div className={`w-12 h-1 ${step > s ? 'bg-primary-500' : 'bg-gray-300'}`}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 lg:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.selectService')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleInputChange('service', service.id)}
                        className={`p-6 rounded-xl border-2 transition-all text-left ${
                          formData.service === service.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="material-icons text-3xl text-primary-600">{service.icon}</span>
                          <div>
                            <p className="font-bold text-gray-900">{t(`services.${service.id}.title`)}</p>
                            <p className="text-sm text-gray-600">{service.price} VNĐ</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.selectPetType')}
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {petTypes.map((pet) => (
                      <button
                        key={pet.id}
                        type="button"
                        onClick={() => handleInputChange('petType', pet.id)}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          formData.petType === pet.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <span className="material-icons text-4xl text-primary-600 mb-2">{pet.icon}</span>
                        <p className="font-medium text-gray-900">{t(`booking.${pet.id}`)}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.selectDate')}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.selectTime')}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleInputChange('time', time)}
                        className={`py-3 rounded-xl border-2 transition-all font-medium ${
                          formData.time === time
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-300 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    {t('booking.selectStaff')}
                  </label>
                  <div className="space-y-3">
                    {staff.map((person) => (
                      <button
                        key={person.id}
                        type="button"
                        onClick={() => handleInputChange('staff', person.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                          formData.staff === person.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <p className="font-bold text-gray-900">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.specialty}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Pet & Owner Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('booking.petName')} *
                    </label>
                    <input
                      type="text"
                      value={formData.petName}
                      onChange={(e) => handleInputChange('petName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('booking.petWeight')}
                    </label>
                    <input
                      type="number"
                      value={formData.petWeight}
                      onChange={(e) => handleInputChange('petWeight', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.ownerName')} *
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('booking.ownerPhone')} *
                    </label>
                    <input
                      type="tel"
                      value={formData.ownerPhone}
                      onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('booking.ownerEmail')}
                    </label>
                    <input
                      type="email"
                      value={formData.ownerEmail}
                      onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('booking.notes')}
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium"
                >
                  {t('booking.cancel')}
                </button>
              )}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`ml-auto px-8 py-3 rounded-full font-medium transition-all ${
                    canProceed()
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {t('hero.quickBook')}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className={`ml-auto px-8 py-3 rounded-full font-medium transition-all ${
                    canProceed()
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {t('booking.submit')}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
