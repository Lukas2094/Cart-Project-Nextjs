import { Products } from "@/interfaces/Produtcs";
import { api } from "./api/client";


export async function getProducts(): Promise<Products[]> {
    const { data } = await api.get(`/products`);

    return data;
}