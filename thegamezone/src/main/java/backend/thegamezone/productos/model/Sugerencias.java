package backend.thegamezone.productos.model;


import backend.thegamezone.usuario.Usuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;


@Entity
@Data
@Table(name= "sugerencias")
@AllArgsConstructor
@NoArgsConstructor
public class Sugerencias implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name ="idSugerencias")
    private Long id;

    @JoinColumn(name = "usuario",referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Usuario usuario;


    @Basic(optional = false)
    @Column(name ="sugerencia")
    private String sugerencia;

    @CreationTimestamp
    private LocalDateTime fechaSugerencia;

}

