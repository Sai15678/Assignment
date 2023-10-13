package com.pangram_or_not;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramOrNot {
	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        boolean isPangram = checkPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        scanner.close();
    }

    public static boolean checkPangram(String input) {
        
        input = input.toLowerCase();
        Set<Character> alphabetSet = new HashSet<>();
        for (char ch : input.toCharArray()) {
        	if (Character.isLetter(ch)) {
                alphabetSet.add(ch);
            }
        }
        return alphabetSet.size() == 26;
    }

}
