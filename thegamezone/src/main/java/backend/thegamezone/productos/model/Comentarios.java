package backend.thegamezone.productos.model;


import backend.thegamezone.usuario.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;


@Entity
@Data
@Table(name= "comentarios")
@AllArgsConstructor
@NoArgsConstructor
public class Comentarios implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name ="idComentario")
    private Long id;

    @JoinColumn(name = "usuario",referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Usuario usuario;

    @JoinColumn(name = "producto",referencedColumnName = "idProducto")
    @ManyToOne(optional = false)
    private Producto producto;

    @Basic(optional = false)
    @Column(name ="comentario")
    private String comentario;

    @CreationTimestamp
    private LocalDateTime fechaSugerencia;

}

