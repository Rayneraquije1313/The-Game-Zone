package backend.thegamezone.auth;

import backend.thegamezone.Jwt.JwtService;
import backend.thegamezone.productos.model.Producto;
import backend.thegamezone.productos.repositorio.ProductoRepositorio;
import backend.thegamezone.usuario.Rol;
import backend.thegamezone.usuario.Usuario;
import backend.thegamezone.usuario.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken
                (request.getUsername(), request.getPassword()));
        UserDetails usuario= usuarioRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(usuario);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse registro(RegistroRequest request) {
        Usuario username = Usuario.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .nombre(request.getNombre())
                .password(request.getPassword())
                .dirrecion(request.getDirrecion())
                .apellido(request.getApellido())
                .numero(request.getNumero())
                .rol(Rol.USER)
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        usuarioRepository.save(username);
        String token = null;
        return AuthResponse.builder()
                .token(jwtService.getToken(username))
                .build();
    }



}
