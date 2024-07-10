package backend.thegamezone.productos.repositorio;

import backend.thegamezone.productos.model.Comentarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentarioRepositorio extends JpaRepository<Comentarios,Long> {
}
