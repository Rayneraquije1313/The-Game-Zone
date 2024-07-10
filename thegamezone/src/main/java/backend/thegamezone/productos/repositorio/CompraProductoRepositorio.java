package backend.thegamezone.productos.repositorio;

import backend.thegamezone.productos.model.CompraProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraProductoRepositorio extends JpaRepository<CompraProducto,Long> {
}
