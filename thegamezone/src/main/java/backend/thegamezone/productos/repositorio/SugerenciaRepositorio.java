package backend.thegamezone.productos.repositorio;

import backend.thegamezone.productos.model.Sugerencias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SugerenciaRepositorio extends JpaRepository<Sugerencias,Long> {
}
