package me.maxgibbs.monjournal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"me.maxgibbs.monjournal"})
public class MonjournalApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(MonjournalApplication.class);
		app.run(args);
	}

}
