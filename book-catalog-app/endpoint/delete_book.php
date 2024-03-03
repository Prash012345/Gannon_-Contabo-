<?php
include('../conn/conn.php');

if (isset($_GET['delete'])) {
    $bookID = $_GET['delete'];

    // Retrieve the book image filename
    $stmt = $conn->prepare("SELECT `book_image` FROM `tbl_book` WHERE `tbl_book_id` = ?");
    $stmt->execute([$bookID]);
    $row = $stmt->fetch();

    $bookImage = $row['book_image'];

    // Delete the book from the database
    $stmt = $conn->prepare("DELETE FROM `tbl_book` WHERE `tbl_book_id` = ?");
    $stmt->execute([$bookID]);

    // Delete the associated image file
    if (!empty($bookImage)) {
        $imagePath = "../image/" . $bookImage;
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
    }

    // Redirect to the page where you want to display the updated book list
    header("Location: http://localhost/book-catalog-app/index.php");
    exit();
}
?>
