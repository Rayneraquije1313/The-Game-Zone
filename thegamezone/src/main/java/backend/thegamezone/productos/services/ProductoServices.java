package backend.thegamezone.productos.services;

import backend.thegamezone.productos.model.Producto;
import backend.thegamezone.productos.repositorio.ProductoRepositorio;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ProductoServices {

    @Autowired
    public ProductoRepositorio repositorio;

    public List<Producto> listar(){
        return repositorio.findAll();
    }

    public List<Producto> listarPorTipo(String tipo) {
        return repositorio.findByTipo(tipo);
    }

    public Producto guardar(Producto producto){
        return repositorio.save(producto);
    }

    public Producto buscar(Long id){
        return repositorio.findById(id).get();
    }

    public Producto actualizar(Producto producto){

        Producto productoActual =repositorio.findById(producto.getId()).get();
        productoActual.setId(producto.getId());
        productoActual.setTipo(producto.getTipo());
        Producto productoActualizado = repositorio.save(producto);
        return productoActualizado;
    }

    public void eliminar(Long id){
        repositorio.deleteById(id);
    }

    public void actualizar(Long id, Producto producto){
        Producto productoActualizado = repositorio.findById(id).get();
        productoActualizado.setId(producto.getId());
        productoActualizado.setTipo(producto.getTipo());
        repositorio.save(productoActualizado);
    }
}
