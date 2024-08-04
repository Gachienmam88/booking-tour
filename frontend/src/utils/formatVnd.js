function formatToVND(amount) {
    if (isNaN(amount)) {
        throw new Error('Input must be a number');
    }

    // Chuyển số thành chuỗi
    const amountStr = amount.toString();
    
    // Tách phần nguyên và phần thập phân (nếu có)
    const [integerPart, decimalPart] = amountStr.split('.');
    
    // Đưa dấu chấm ngăn cách phần nghìn vào phần nguyên
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Nếu có phần thập phân, nối lại với phần nguyên
    return decimalPart ? `${formattedIntegerPart},${decimalPart}` : `${formattedIntegerPart}`;
}
export default formatToVND