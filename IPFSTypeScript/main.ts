import { createHelia } from 'helia';
import { strings } from '@helia/strings';

// Función async autoejecutable para usar await
(async () => {
    try {
        // Crear instancia de Helia
        const helia = await createHelia();
        const s = strings(helia);

        // Agregar un string a Helia y obtener su dirección inmutable
        const myImmutableAddress = await s.add('hello world');

        // Imprimir el string almacenado en la dirección inmutable
        console.log(await s.get(myImmutableAddress));
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
})();