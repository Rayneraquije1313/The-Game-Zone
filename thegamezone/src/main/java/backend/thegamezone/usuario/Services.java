package backend.thegamezone.usuario;


import backend.thegamezone.productos.model.Producto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class Services {
    private final UsuarioRepository usuarioRepository;

    @Transactional
    public UsuarioResponse updateUsuario(UsuarioRequest usuarioRequest) {
        Usuario usuario = Usuario.builder()
                .id(usuarioRequest.id)
                .nombre(usuarioRequest.nombre)
                .apellido(usuarioRequest.apellido)
                .numero(usuarioRequest.numero)
                .email(usuarioRequest.email)
                .password(usuarioRequest.password)
                .dirrecion(usuarioRequest.dirrecion)
                .rol(Rol.USER)
                .build();
                usuarioRepository.updateUsuario(usuario.id,usuario.nombre,usuario.apellido,usuario.numero
                ,usuario.email,usuario.dirrecion);
                return new UsuarioResponse("El usuario se modifico exitosamente");
    }

    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    public UsuarioDto getUsuario(Integer id) {
        Usuario usuario = usuarioRepository.findById(id).orElse(null);

        if (usuario != null) {
            UsuarioDto usuarioDto = UsuarioDto.builder()
                    .id(usuario.id)
                    .username(usuario.username)
                    .nombre(usuario.nombre)
                    .apellido(usuario.apellido)
                    .numero(usuario.numero)
                    .email(usuario.email)
                    .password(usuario.password)
                    .dirrecion(usuario.dirrecion)
                    .build();
            return usuarioDto;
        }
        return null;
    }
}
