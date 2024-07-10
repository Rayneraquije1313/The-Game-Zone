package backend.thegamezone.securityConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import backend.thegamezone.Jwt.JwtFiltrel;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityController {

    private final JwtFiltrel jwtAutheticationFiltrer;
    private final AuthenticationProvider authProvide;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf .disable())
                .authorizeHttpRequests(request -> request
                        .requestMatchers("/thegamezone/producto/**").permitAll()
                        .requestMatchers("thegamezone/**").permitAll()
                        .requestMatchers("/thegamezone/login").permitAll()
                        .requestMatchers("/thegamezone/registro").permitAll()
                        .requestMatchers("/usuario").permitAll()
                        .anyRequest().authenticated()
                )
                .sessionManagement(sesionManager ->
                        sesionManager
                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvide)
                .addFilterBefore(jwtAutheticationFiltrer, UsernamePasswordAuthenticationFilter.class)
                .build();

    }

}
