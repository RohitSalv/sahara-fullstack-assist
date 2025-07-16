-- USER TABLE
CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    mob VARCHAR(255),
    age INT,
    gender INT,
    marital_status INT,
    name VARCHAR(255),
    password VARCHAR(255),
    role INT,
    trust1 VARCHAR(255),
    trust2 VARCHAR(255)
);

-- CATEGORY TABLE
CREATE TABLE category (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);

-- SUBCATEGORY TABLE
CREATE TABLE subcategory (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    category_id BIGINT,
    description VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

-- RESOURCE TABLE
CREATE TABLE resource (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255),
    contact_number VARCHAR(255),
    description VARCHAR(255),
    document_url VARCHAR(255),
    image_url VARCHAR(255),
    title VARCHAR(255),
    video_url VARCHAR(255),
    website_url VARCHAR(255),
    subcategory_id BIGINT,
    FOREIGN KEY (subcategory_id) REFERENCES subcategory(id)
);

-- HELPLINE TABLE
CREATE TABLE helpline (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    hours VARCHAR(255),
    name VARCHAR(255),
    phone_number VARCHAR(255)
);

-- SUPPORT GROUP TABLE
CREATE TABLE support_group (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    location VARCHAR(255),
    name VARCHAR(255),
    online_option VARCHAR(255),
    schedule VARCHAR(255)
);

-- RECOVERY TOOL TABLE
CREATE TABLE recovery_tool (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    button_text VARCHAR(255),
    description VARCHAR(255),
    icon_url VARCHAR(255),
    link VARCHAR(255),
    title VARCHAR(255)
);

-- SUCCESS STORY TABLE
CREATE TABLE success_story (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    approved BIT(1),
    author_name VARCHAR(255),
    content VARCHAR(3000),
    date_posted DATETIME(6),
    title VARCHAR(255),
    link VARCHAR(500)
);

-- INCIDENT REPORT TABLE
CREATE TABLE incident_report (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    anonymous BIT(1),
    contact_email VARCHAR(255),
    contact_method VARCHAR(255),
    contact_name VARCHAR(255),
    contact_phone VARCHAR(255),
    description VARCHAR(2000),
    incident_date DATE,
    incident_location VARCHAR(255),
    incident_type VARCHAR(255),
    media_consent BIT(1)
);

-- INCIDENT MEDIA TABLE
CREATE TABLE incident_media (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    data LONGBLOB,
    file_name VARCHAR(255),
    file_type VARCHAR(255),
    report_id BIGINT,
    FOREIGN KEY (report_id) REFERENCES incident_report(id)
);
