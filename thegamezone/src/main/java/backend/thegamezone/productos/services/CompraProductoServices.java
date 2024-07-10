package backend.thegamezone.productos.services;

import backend.thegamezone.productos.repositorio.CompraProductoRepositorio;
import backend.thegamezone.productos.model.CompraProducto;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CompraProductoServices {

    @Autowired
    public CompraProductoRepositorio repositorio;

    public List<CompraProducto> listar(){
        return repositorio.findAll();
    }

    public CompraProducto guardar(CompraProducto compraProducto){
        return repositorio.save(compraProducto);
    }

    public CompraProducto buscar(Long id){
        return repositorio.findById(id).get();
    }

    public CompraProducto actualizaCompraProducto(CompraProducto compraProducto){

        CompraProducto compraActual =repositorio.findById(compraProducto.getId()).get();
        compraActual.setId(compraProducto.getId());
        compraActual.setCompra(compraProducto.getCompra());
        compraActual.setCompra(compraProducto.getCompra());
        compraActual.setCantidad(compraProducto.getCantidad());
        CompraProducto compraActualActualizado = repositorio.save(compraProducto);
        return compraActualActualizado;
    }

    public void eliminar(Long id){
        repositorio.deleteById(id);
    }

    public void actualizar(Long id, CompraProducto compraProducto){
        CompraProducto compraActualActualizado = repositorio.findById(id).get();
        compraActualActualizado.setId(compraProducto.getId());
        compraActualActualizado.setCompra(compraProducto.getCompra());
        compraActualActualizado.setProducto(compraProducto.getProducto());
        compraActualActualizado.setCantidad(compraProducto.getCantidad());
        repositorio.save(compraActualActualizado);
    }
}
