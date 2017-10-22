package com.pgs.springcloud.warehouseservice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class WarehouseController {

    @GetMapping
    public Item getItem(@RequestHeader("custom-header") String header) {
        log.info("Custom header: {}", header);
        return new Item("Warehouse", 50);
    }

    @GetMapping("/notfound")
    public ResponseEntity<?> getNotFound() {
        return ResponseEntity.notFound().build();
    }

}
