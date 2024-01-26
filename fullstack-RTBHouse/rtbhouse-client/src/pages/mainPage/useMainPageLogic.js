import { useRequestData } from "../../hooks/useRequestData"
import { useInput } from "../../hooks/useInput";

export const useMainPageLogic = () => {
    const [data, loading] = useRequestData("/productsData", [])
    const [name, handleName, clearName] = useInput("");
    const [store, handleStore, clearStore] = useInput("");
    const [minTotal, handleMinTotal, clearMinTotal] = useInput(0);
    const [maxTotal, handleMaxTotal, clearMaxTotal] = useInput(1000000);
    const [minPrice, handleMinPrice, clearMinPrice] = useInput(0);
    const [maxPrice, handleMaxPrice, clearMaxPrice] = useInput(1000000);
    const [sortParam, handleSort, clearSort] = useInput("");

    const products = data?.length && data
        .filter(product => product.name?.toLowerCase().includes(name.toLowerCase()))
        .filter(product => product.storeName?.toLowerCase().includes(store.toLowerCase()))
        .filter(product => {
            const max = maxTotal || 1000000
            return product.totalRevenue >= minTotal && product.totalRevenue <= max
        })
        .filter(product => {
            const max = maxPrice || 1000000
            return product.price >= minPrice && product.price <= max
        })
        .sort((a, b) => {
            switch (sortParam) {
            case "Store Name":
                return a.storeName.localeCompare(b.storeName)
            case "Product Name":
                return a.name.localeCompare(b.name)
            case "Price":
                return b.price - a.price
            case "Amount Sold":
                return b.amountSold - a.amountSold
            case "Total Revenue":
                return b.totalRevenue - a.totalRevenue  
            default:
                return 0;
            }
        })

    const clearAll = () => {
        clearName()
        clearStore()
        clearMinTotal()
        clearMaxTotal()
        clearMinPrice()
        clearMaxPrice()
        clearSort()
    }

    const inputValues = {
        name,
        store,
        minTotal,
        maxTotal,
        minPrice,
        maxPrice,
        sortParam
    }
    const inputHandlers = {
        handleName,
        handleStore,
        handleMinTotal,
        handleMaxTotal,
        handleMinPrice,
        handleMaxPrice,
        handleSort,
        clearAll
    }

    return [products, loading, inputHandlers, inputValues]
}
