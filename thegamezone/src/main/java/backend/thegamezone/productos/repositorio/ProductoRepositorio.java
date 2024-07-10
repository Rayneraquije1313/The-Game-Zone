package backend.thegamezone.productos.repositorio;


import backend.thegamezone.productos.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto,Long> {
    List<Producto> findByTipo(String tipo);
}
