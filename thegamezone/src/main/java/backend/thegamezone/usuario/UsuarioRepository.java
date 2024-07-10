package backend.thegamezone.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Optional<Usuario> findByUsername(String username);

    @Modifying()
    @Query("update Usuario u set u.nombre=:nombre, u.apellido=:apellido, u.email=:email, " +
            "u.numero=:numero, u.dirrecion=:dirrecion where u.id=:id")
    void updateUsuario(@Param("id") Integer id, @Param("nombre") String nombre,
                       @Param("apellido") String apellido, @Param("email") String email,
                       @Param("numero") String numero, @Param("dirrecion") String dirrecion);

}
