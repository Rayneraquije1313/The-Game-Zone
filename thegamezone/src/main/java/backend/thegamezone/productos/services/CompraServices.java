package backend.thegamezone.productos.services;

import backend.thegamezone.productos.model.Compra;
import backend.thegamezone.productos.repositorio.CompraRepositorio;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CompraServices {

    @Autowired
    public CompraRepositorio repositorio;

    public List<Compra> listar(){
        return repositorio.findAll();
    }

    public Compra guardar(Compra compra){
        return repositorio.save(compra);
    }

    public Compra buscar(Long id){
        return repositorio.findById(id).get();
    }

    public Compra actualizaCompraProducto(Compra compra){

        Compra compraActual =repositorio.findById(compra.getId()).get();
        compraActual.setId(compra.getId());
        compraActual.setUsuario(compra.getUsuario());
        compraActual.setFechaCompra(compra.getFechaCompra());
        Compra compraActualActualizado = repositorio.save(compra);
        return compraActualActualizado;
    }

    public void eliminar(Long id){
        repositorio.deleteById(id);
    }

    public void actualizar(Compra compra){
        Compra compraActualizado = repositorio.findById(compra.getId()).get();
        compraActualizado.setId(compra.getId());
        compraActualizado.setUsuario(compra.getUsuario());
        compraActualizado.setFechaCompra(compra.getFechaCompra());
        repositorio.save(compraActualizado);
    }
}
