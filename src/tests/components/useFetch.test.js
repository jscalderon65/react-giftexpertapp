import { renderHook } from '@testing-library/react-hooks'
import {useFetch} from '../../customHooks/useFetch'
describe("Pruebas en custom hook",()=>{
    test("Debe retornar el estado inicial",()=>{
/*         const {result}=  renderHook(()=>useFetch("sad"));
        const {data}=result.current;
        expect(data).toEqual([]); */
    })
    test("Debe retornar un arreglo de imgs y loading en false",async ()=>{
        const {result, waitForNextUpdate}=  renderHook(()=>useFetch("One-Punch"));
        await waitForNextUpdate(); 
        const {data, loading}=result.current;
    })
})