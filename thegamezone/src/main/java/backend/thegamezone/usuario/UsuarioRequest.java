package backend.thegamezone.usuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioRequest {
    int id;
    String username;
    String email;
    String nombre;
    String apellido;
    String numero;
    String dirrecion;
    String password;
}
