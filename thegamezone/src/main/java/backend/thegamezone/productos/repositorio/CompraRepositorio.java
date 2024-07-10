package backend.thegamezone.productos.repositorio;


import backend.thegamezone.productos.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompraRepositorio extends JpaRepository<Compra,Long> {
}
