package backend.thegamezone.usuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsuarioDto {
    int id;
    String username;
    String email;
    String nombre;
    String apellido;
    String numero;
    String dirrecion;
    String password;
}
