

const calcularAhorro = (objetivo, plazos) =>{
    let total;
    total = (objetivo / plazos)
    return total
} 
const formatearDinero = (valor)=>{
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(valor)
  };

export {
    calcularAhorro,
    formatearDinero
}