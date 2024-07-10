package backend.thegamezone.productos.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ExceptionNotFound extends RuntimeException {
    private static  final long serialVersionUID = 1L;

    public ExceptionNotFound(String message) {
        super(message);
    }
}
