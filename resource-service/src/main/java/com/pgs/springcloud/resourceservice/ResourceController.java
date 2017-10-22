package com.pgs.springcloud.resourceservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping
    public Resource getResource() {
        return new Resource("Resource", 100);
    }

}
