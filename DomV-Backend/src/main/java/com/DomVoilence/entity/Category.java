package com.DomVoilence.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Category {
	 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String name;
	    private String description;

		Category(){
	    	
	    }
	    
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public Category(Long id, String name, String description) {
			super();
			this.id = id;
			this.name = name;
			this.description = description;
		}

		@Override
		public String toString() {
			return "Category [id=" + id + ", name=" + name + ", description=" + description + "]";
		}
		
		
	    

}
