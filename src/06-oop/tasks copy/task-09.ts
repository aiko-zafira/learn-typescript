/**
 * A school LMS needs to send notifications to students.
 * The system supports three notification types:
 * - Email, example:
 * --------------------------------------------------
 * To: student@example.com
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - SMS, example:
 * --------------------------------------------------
 * To: +628123456789
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * - Push Notification, example:
 * --------------------------------------------------
 * Device: ST001
 * Message: Your assignment has been graded.
 * --------------------------------------------------
 * 
 * Tasks:
 * - Create class Notification with property "message" and method "send()"
 * - Create children class of Notification such as EmailNotification, SMSNotification, PushNotification
 * - each child should override "send()"
 */

class Notification {
    constructor(public message: string) { }

    send(): void {
        console.log(`Sending message: ${this.message}`);
    }
}

class EmailNotification extends Notification {
    constructor(
        public to: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log("--------------------------------------------------");
        console.log(`To: ${this.to}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

class SMSNotification extends Notification {
    constructor(
        public to: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log("--------------------------------------------------");
        console.log(`To: ${this.to}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

class PushNotification extends Notification {
    constructor(
        public deviceId: string,
        message: string
    ) {
        super(message);
    }

    send(): void {
        console.log("--------------------------------------------------");
        console.log(`Device: ${this.deviceId}`);
        console.log(`Message: ${this.message}`);
        console.log("--------------------------------------------------");
    }
}

const notifications: Notification[] = [
    new EmailNotification("student@example.com", "Your assignment has been graded."),
    new SMSNotification("+628123456789", "Your assignment has been graded."),
    new PushNotification("ST001", "Your assignment has been graded.")
];

for (const notification of notifications) {
    notification.send();
}