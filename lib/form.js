// Function to get brands
export async function getBrands(props){
    // Create empty array to store unique brands
    const uniqueBrands = [];
    // Create array of brands from data(ssr)
    const brandsResult = props.map(function(car){
        return(
            car.brand
        )
    })
    // Filter the array of duplicates and store in a new array of unique brands
    const brands = brandsResult.filter(element => {
        const isDuplicate = uniqueBrands.includes(element)
        if (!isDuplicate) {
            uniqueBrands.push(element)
            return true
        }
        return false
    })
    return brands
}