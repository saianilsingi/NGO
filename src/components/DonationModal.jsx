const DonationModal = ({ isOpen, onClose }) => {
  // UPI payment details - replace with actual UPI ID
  const upiId = 'shaktijyothi@upi'
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(`upi://pay?pa=${upiId}&pn=Shakti%20Jyothi%20Foundation&am=&cu=INR`)}`

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-black/60 backdrop-blur-sm absolute inset-0"
        onClick={onClose}
      ></div>
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full relative z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          ×
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Make a Donation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Scan the QR code to donate via UPI
            </p>

            <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-gray-200 inline-block mb-4 sm:mb-6">
              <img
                src={qrCodeUrl}
                alt="UPI QR Code"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">UPI ID:</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 font-mono break-all px-2">
                {upiId}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(upiId)
                  alert('UPI ID copied to clipboard!')
                }}
                className="mt-2 text-primary hover:text-orange-600 text-xs sm:text-sm font-medium"
              >
                Copy UPI ID
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 px-2">
              Thank you for supporting women empowerment in Andhra Pradesh!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationModal
