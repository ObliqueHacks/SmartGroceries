import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    @Size(min = 3, max = 20)
    private String name;

    @NotBlank
    @Size(min = 6)
    private String password;


    public UserDTO() {}

    public UserDTO(String username, String password, String name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    // Getters and Setters
}
