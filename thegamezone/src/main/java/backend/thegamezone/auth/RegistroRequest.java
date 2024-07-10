package backend.thegamezone.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegistroRequest {

    String nombre;
    String email;
    String password;
    String username;
    String apellido;
    String numero;
    String dirrecion;

}
